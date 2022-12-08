import { useEffect, useState } from "react";
import styled from "styled-components";

export default function SnackBar({ text, onClose }) {
  const [showSnack, setShowSnack] = useState(true);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setShowSnack(false);
      onClose?.();
    }, 3000);

    return () => clearTimeout(timeoutID);
  }, []);

  return showSnack ? <SnackText>{text}</SnackText> : null;
}

const SnackText = styled.p`
  color: var(--third-color);
  text-align: center;
  position: absolute;
  top: 880px;
`;
