import React from "react";

// const StyledButton = styled.button`
//   background: palevioletred;
//   border-radius: 3px;
//   border: 2px solid palevioletred;
//   color: #fff;
//   margin: 0.25rem 1em;
//   padding: 0.25em 1em;
//   cursor: pointer;
// `;

type Props = {
  title: string;
  onClick(): void;
};

const Button = ({ title, onClick }: Props): React.ReactElement => {
  return (
    <button type="button" className="btn" onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
