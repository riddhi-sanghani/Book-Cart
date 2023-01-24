import { Header } from "./Header";
interface HeaderProps {
  title: string;
  children: JSX.Element;
}
export const PageWraper = ({ title, children }: HeaderProps) => {
  return (
    <div>
      <Header title={title}></Header>
      <div className="page-container">{children}</div>
    </div>
  );
};
