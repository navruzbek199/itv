import { useState } from "react";

export function useModal() {
  const [show, setShow] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [width, setWidth] = useState<string>("");

  const showModal = () => setShow(true);
  const hideModal = () => setShow(false);

  return {
    show,
    title,
    width,
    showModal,
    hideModal,
    setTitle,
    setWidth,
  };
}
