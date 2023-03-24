import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import InputField from "../components/input-field";
import React, { useState } from "react";

const inter = Inter({ subsets: ["latin"] });
const answer = (
  <div className={styles.thirteen}>
    <Image src="/qr-code.png" alt="13" width={250} height={250} priority />
  </div>
);
export default function Home() {
  const [validationMessage, setValidationMessage] = useState("");

  const handleValidation = (isValid) => {
    if (isValid) {
      setValidationMessage(answer);
    } else {
      setValidationMessage("Svaret er feil 😬");
    }
  };
  return (
    <>
      <Head>
        <title>Nero</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.center}>
          <div className={styles.wrapper}>
            <h1 className={inter.className}>Spørsmålet lyder</h1>
            <p>"En berømt struktur står høyt, et vitne til tidens gang. Dens distinkte form har fanget fantasien til millioner. For å avsløre identiteten, følg tallene og avslør hemmeligheten de skjuler"</p>
           <p>7 21 19 20 1 22 </p>
            <InputField
              correctValue="Eiffeltårnet"
              onValidation={handleValidation}
            />
            <p className={`${inter.className} ${styles.feilsvar}`}>
              {validationMessage}
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
