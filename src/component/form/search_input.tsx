import React, { useState } from "react";

interface Props {
  className?: string;
  placeholder?: string;
  children?: React.ReactNode;
}

function SearchInput(props: Props) {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e: any) => {
    setInputValue(e.target.value);
  };
  return (
    <div className="search_input">
      <div className="parent">
        <input
          type="text"
          placeholder={props.placeholder}
          onChange={handleChange}
        />
        <button>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="magnifyingglass" clipPath="url(#clip0_2614_10960)">
              <g id="Group">
                <path
                  id="Vector"
                  d="M0.0839844 6.4872C0.0839844 7.36995 0.251447 8.19785 0.586374 8.97091C0.921301 9.74402 1.38588 10.4248 1.9801 11.0133C2.57433 11.6018 3.26173 12.0619 4.04233 12.3936C4.82292 12.7253 5.65888 12.8911 6.55022 12.8911C7.25248 12.8911 7.92232 12.7841 8.55974 12.5701C9.19721 12.3561 9.78063 12.0619 10.31 11.6874L14.2967 15.6437C14.394 15.7347 14.5007 15.8029 14.6168 15.8484C14.7329 15.8939 14.8558 15.9166 14.9855 15.9166C15.1692 15.9166 15.3312 15.8751 15.4717 15.7922C15.6121 15.7092 15.7215 15.5956 15.7998 15.4511C15.8782 15.3067 15.9173 15.1462 15.9173 14.9696C15.9173 14.8412 15.8944 14.7209 15.8484 14.6085C15.8025 14.4961 15.7364 14.3972 15.65 14.3116L11.6876 10.3633C12.1035 9.82828 12.429 9.23174 12.6639 8.57367C12.8989 7.91564 13.0164 7.22015 13.0164 6.4872C13.0164 5.60445 12.849 4.77654 12.5141 4.00346C12.1791 3.23039 11.7146 2.5496 11.1204 1.9611C10.5261 1.3726 9.83872 0.912503 9.05809 0.580802C8.27751 0.249102 7.44156 0.083252 6.55022 0.083252C5.65888 0.083252 4.82292 0.249102 4.04233 0.580802C3.26173 0.912503 2.57433 1.3726 1.9801 1.9611C1.38588 2.5496 0.921301 3.23039 0.586374 4.00346C0.251447 4.77654 0.0839844 5.60445 0.0839844 6.4872ZM1.4696 6.4872C1.4696 5.7917 1.6006 5.14034 1.8626 4.53311C2.1246 3.92589 2.48924 3.39089 2.95651 2.92811C3.42379 2.46534 3.96399 2.10421 4.57713 1.84473C5.19026 1.58526 5.84796 1.45552 6.55022 1.45552C7.25248 1.45552 7.91018 1.58526 8.52331 1.84473C9.13644 2.10421 9.67528 2.46534 10.1398 2.92811C10.6044 3.39089 10.9691 3.92589 11.2338 4.53311C11.4985 5.14034 11.6308 5.7917 11.6308 6.4872C11.6308 7.1827 11.4985 7.83406 11.2338 8.44129C10.9691 9.04851 10.6044 9.58216 10.1398 10.0422C9.67528 10.5024 9.13644 10.8635 8.52331 11.1256C7.91018 11.3878 7.25248 11.5189 6.55022 11.5189C5.84796 11.5189 5.19026 11.3878 4.57713 11.1256C3.96399 10.8635 3.42379 10.5024 2.95651 10.0422C2.48924 9.58216 2.1246 9.04851 1.8626 8.44129C1.6006 7.83406 1.4696 7.1827 1.4696 6.4872Z"
                  fill="black"
                />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_2614_10960">
                <rect
                  width="15.8333"
                  height="15.8333"
                  fill="white"
                  transform="translate(0.0839844 0.083252)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
      {inputValue.length > 0 && (
        <ul>
          <li>
            <a href="">검색내용 입니다.</a>
          </li>
          <li>
            <a href="">검색내용 입니다.</a>
          </li>
          <li>
            <a href="">검색내용 입니다.</a>
          </li>
          <li>
            <a href="">검색내용 입니다.</a>
          </li>
          <li>
            <a href="">검색내용 입니다.</a>
          </li>
          <li>
            <a href="">검색내용 입니다.</a>
          </li>
        </ul>
      )}
    </div>
  );
}

export default SearchInput;
