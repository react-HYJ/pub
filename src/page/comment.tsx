import { useRef, useState } from "react";
import Header from "../component/layout/header";
import Container from "../component/layout/container";
import Button from "../component/form/button";
import ListNodata from "../component/_common/list_nodata";

interface ChatComment {
  id: number;
  content: string;
  date: string;
  isMyMessage: boolean;
}

function Comment() {
  const [commentValue, setCommentValue] = useState<string>("");
  const [comment, setComment] = useState<ChatComment[]>([]);
  const [edit, setEdit] = useState<number | null>(null);
  const chatBodyRef = useRef<HTMLDivElement>(null);

  const commentRegist = () => {
    if (commentValue.trim() === "") return;
    const today = new Date();
    const date =
      today.toISOString().split("T")[0] +
      " " +
      today.toTimeString().split(" ")[0];
    const newComment: ChatComment = {
      id: Date.now(),
      content: commentValue,
      date,
      isMyMessage: true,
    };
    setComment((prevComment) => [...prevComment, newComment]);
    setCommentValue("");
    setTimeout(() => {
      if (chatBodyRef.current) {
        chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
      }
    }, 0);
  };

  const handleFormChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentValue(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter") {
      if (event.ctrlKey) {
        // Ctrl + Enter: 줄바꿈 추가
        const textarea = event.target as HTMLTextAreaElement;
        const { selectionStart, selectionEnd } = textarea;
        const newValue =
          commentValue.slice(0, selectionStart) +
          "\n" +
          commentValue.slice(selectionEnd);
        setCommentValue(newValue);
        // 커서를 줄바꿈 이후로 이동
        setTimeout(() => {
          textarea.selectionStart = textarea.selectionEnd = selectionStart + 1;
        }, 0);
        event.preventDefault();
      } else {
        event.preventDefault();
        commentRegist();
      }
    }
  };

  // 댓글 수정
  const saveEdit = (id: number, newValue: string) => {
    if (newValue.trim() === "") {
      alert("내용을 입력해주세요.");
      return;
    }

    const today = new Date();
    const date =
      today.toISOString().split("T")[0] +
      " " +
      today.toTimeString().split(" ")[0];

    setComment((prevComment) =>
      prevComment.map((comment) =>
        comment.id === id ? { ...comment, content: newValue, date } : comment
      )
    );

    setEdit(null); // 수정 종료
  };

  // 댓글 삭제
  const handleDelete = (id: number) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      setComment((prevComment) =>
        prevComment.filter((comment) => comment.id !== id)
      );
    }
  };
  return (
    <>
      <Header />
      <Container>
        <div className="contents_wrap">
          <div className="area">
            <div className="comment_wrap">
              <p className="comment_num">총 12개</p>
              <ul className="comment_list">
                {/* 댓글이 없을 때 노데이터 노출*/}
                {comment.length > 0 ? (
                  <></>
                ) : (
                  <li>
                    <ListNodata text="등록된 댓글이 없습니다." />
                  </li>
                )}
                {comment.map((item) => (
                  <li key={item.id}>
                    {edit === item.id ? (
                      <input
                        type="text"
                        defaultValue={item.content}
                        onBlur={(e) => saveEdit(item.id, e.target.value)} // Focus out 시 저장
                        onKeyDown={(e) => {
                          if (e.key === "Enter")
                            saveEdit(item.id, e.currentTarget.value); // Enter 시 저장
                        }}
                        autoFocus
                      />
                    ) : (
                      <p>{item.content}</p>
                    )}
                    <span className="date">{item.date}</span>
                    <div className="comment_btn_wrap">
                      <button onClick={() => setEdit(item.id)}>
                        <img src="/img/icon/icon_edit.svg" alt="" />
                      </button>
                      <button onClick={() => handleDelete(item.id)}>
                        <img src="/img/icon/icon_delete.svg" alt="" />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="comment_write">
                <textarea
                  id="chat_input"
                  value={commentValue}
                  onChange={handleFormChange}
                  onKeyDown={handleKeyDown}
                  placeholder="내용을 입력해주세요."
                />
                <Button
                  className="push_btn"
                  title="등록"
                  size="h_28"
                  bg_color="btn-bg-bk1"
                  bd_color="btn-bd-bk1"
                  color="btn-text-wh1"
                  onClick={commentRegist}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Comment;