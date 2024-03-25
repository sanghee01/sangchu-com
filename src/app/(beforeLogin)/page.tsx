import Image from "next/image";
import styles from "@/app/page.module.css";
import logo from "/public/logo.png";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className={styles.left}>
        <Image src={logo} alt="logo" className={styles.image} />
      </div>
      <div className={styles.right}>
        <h1>상추 커뮤니티</h1>
        <h2>상추 커뮤니티에 들어와!</h2>
        <Link href="/i/flow/signup" className={styles.signup}>
          계정 만들기
        </Link>
        <h3>이미 상추 커뮤니티에 가입하셨나요?</h3>
        <Link href="/i/flow/login" className={styles.login}>
          로그인
        </Link>
      </div>
    </>
  );
}
