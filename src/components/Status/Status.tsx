import React from "react";
import { StatusMessage } from "./Status.styles";

interface Props {
  text: string;
  error?: boolean;
}

const Status: React.FC<Props> = ({ text, error }) => {
  return <StatusMessage error={error}>{text}</StatusMessage>;
};

export default Status;
