import { ReactNode } from "react";
type Props = {
  children: ReactNode;
  modal: ReactNode;
};

export default function AfterLoginLayout({ children, modal }: Props) {
  return (
    <div>
      애프터 로그인 레이아웃
      {children}
      {modal}
    </div>
  );
}
