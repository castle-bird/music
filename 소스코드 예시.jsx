import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase.config";

const [email, setEmail] = useState(""); // 이메일 상태
const [password, setPassword] = useState(""); // 비밀번호 상태
const [error, setError] = useState(""); // 에러 메시지 상태

const handleLogin = async () => {
    try {
        // Firebase Authentication으로 로그인
        const response = await signInWithEmailAndPassword(auth, email, password);
        console.log(response);
    } catch (err) {
        setError("로그인 실패: " + err.message); // 에러 메시지 설정
    }
};
/////////////////////////////////////////////////////////////////////////////////////
import { Outlet } from "react-router-dom";
import Header from "./components/header";
import axios from "axios";
import { useEffect } from "react";

export default function App() {
    useEffect(() => {
        async function getToken() {
            const response = await axios.post(
                "https://accounts.spotify.com/api/token",
                {
                    grant_type: "client_credentials",
                    client_id: "ef8783a5527d4997a72f25302aeecd53",
                    client_secret: "43c790f367014569914521cbf76eef97",
                },
                {
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                }
            );

            const data = await response.data;

        }

        const data = getToken();

        console.log(data);
    }, []);

    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
        </>
    );
}
