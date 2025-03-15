"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "@/app/page.module.css"; // 절대 경로

export default function Home() {
  const router = useRouter();
  const [team, setTeam] = useState<string>("");
  const [customTeam, setCustomTeam] = useState<string>("");
  const [memberCount, setMemberCount] = useState<number>(6);
  const [showCustomInput, setShowCustomInput] = useState<boolean>(false);

  const handleTeamSelect = (selectedTeam: string) => {
    setTeam(selectedTeam);
    setShowCustomInput(selectedTeam === "custom");
  };

  const increaseMemberCount = () => {
    setMemberCount((prev) => prev + 1);
  };

  const decreaseMemberCount = () => {
    setMemberCount((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const finalTeam = team === "custom" ? customTeam : team;

    if (!finalTeam) {
      alert("팀을 선택하거나 입력해주세요.");
      return;
    }

    // 주문 정보를 세션 스토리지에 저장
    sessionStorage.setItem("orderTeam", finalTeam);
    sessionStorage.setItem("orderMembers", memberCount.toString());

    // 주문 페이지로 이동
    router.push("/order");
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.card}>
          <h1 className={styles.title}>바로밥 주문하기</h1>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>팀 선택</h2>
              <div className={styles.teamButtons}>
                {[1, 2, 3, 4, 5].map((num) => (
                  <button
                    key={num}
                    type="button"
                    className={`${styles.teamButton} ${
                      team === `${num}조` ? styles.active : ""
                    }`}
                    onClick={() => handleTeamSelect(`${num}조`)}
                  >
                    {num}조
                  </button>
                ))}
                <button
                  type="button"
                  className={`${styles.teamButton} ${
                    team === "custom" ? styles.active : ""
                  }`}
                  onClick={() => handleTeamSelect("custom")}
                >
                  직접입력
                </button>
              </div>

              {showCustomInput && (
                <div className={styles.customTeamInput}>
                  <input
                    type="text"
                    value={customTeam}
                    onChange={(e) => setCustomTeam(e.target.value)}
                    placeholder="팀 이름을 입력하세요"
                    className={styles.input}
                    required
                  />
                </div>
              )}
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>인원 수</h2>
              <div className={styles.counterContainer}>
                <button
                  type="button"
                  className={styles.counterButton}
                  onClick={decreaseMemberCount}
                  disabled={memberCount <= 1}
                >
                  -
                </button>
                <span className={styles.counterValue}>{memberCount}명</span>
                <button
                  type="button"
                  className={styles.counterButton}
                  onClick={increaseMemberCount}
                >
                  +
                </button>
              </div>
            </div>

            <button type="submit" className={styles.submitButton}>
              주문하러 가기
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
