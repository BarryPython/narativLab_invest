import Section from "./section";
import { useTranslation } from 'react-i18next';
import "../style/content.scss"

import { ReactComponent as Lock } from "../assets/icons/lock.svg";
import { ReactComponent as Chart } from "../assets/icons/chart.svg";
import { ReactComponent as Coin } from "../assets/icons/coin.svg";
import { useEffect, useState } from "react";
import Modal from "./modal";

export default function Content(){

    const {t} = useTranslation()
    const [percent, setPercent] = useState(10);
    const [connected, setConnected] = useState(false);
    const [modalAcivate, setmodalAcivate] = useState(false);

    //TODO for the web3 dev theses two states are the current investment and the current NRT holded by the user
    const [currentInvestment, setCurrentInvestment] = useState(0);
    const [currentNRT, setCurrentNRT] = useState(0);

    //TODO for the web3 dev implement wallet connection here
    function login(){
        //this function is fired when connect wallet button is clicked
        setConnected(true)
    }

    useEffect(()=>{
        const now = new Date();
        const target = new Date(2023,6,30,19);
        const diffTime = target - now;
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        setPercent(100 - diffDays)
    },[])

    return(
        <>  
            <Modal active={modalAcivate} setActive={setmodalAcivate}/>
            <div className="content">
                <Section title={t("private_sale")} Icon={Lock}>
                    <p>
                        {t("private_sale_content")}
                    </p>
                </Section>
                <Section title={t("public_sale")} Icon={Chart}>
                <p>
                        {t("public_sale_content")}
                    </p>
                </Section>
                <Section title={t("raise_utility")} Icon={Coin}>
                <ul>
                    <li>{t("raise_utility_content_1")}</li>
                    <li>{t("raise_utility_content_2")}</li>
                    <li>{t("raise_utility_content_3")}</li>
                </ul>
                </Section>
                <Section title={t("info")}>
                    <div className="info">
                        <span>
                            <p>{t("info_content_1")}</p><p><strong>$0,05</strong></p>
                        </span>
                        <span>
                            <p>{t("info_content_2")}</p><p><strong>$0,10</strong></p>
                        </span>
                        <span>
                            <p>{t("info_content_3")}</p><p><strong>$600,000</strong></p>
                        </span>
                        <span>
                            <p>{t("info_content_4")}</p><p className="time"><strong>{t("info_before").replace("X",100-percent)}</strong></p>
                        </span>
                        <div id="status-bar">
                            <span style={{width : `${percent}%`}}>
                            </span>
                        </div>
                    </div>
                </Section>
                <Section title={t("WhiteList")}>
                    {connected ? 
                    <div className="info">
                        <span>
                            <p>{t("witheList_content_1")}</p><p><strong>1</strong></p> 
                        </span>
                        <span>
                            <p>{t("witheList_content_2")}</p><p><strong>4</strong></p> 
                        </span>
                        <span>
                            <p>{t("witheList_content_3")}</p><p><strong>3,000 USDC</strong></p> 
                        </span>
                        <span className="split"></span>
                        <span>
                            <p>{t("witheList_content_4")}</p><p><strong>{currentInvestment} USDC</strong></p> 
                        </span>
                        <span>
                            <p>{t("witheList_content_5")}</p><p><strong>{currentNRT}</strong></p> 
                        </span>
                        <button className="main-btn" style={{width : '100%', justifyContent : "center"}}
                            onClick={()=>{setmodalAcivate(true)}}
                        >
                            {t("buy")}
                        </button>
                    </div> 
                    : 
                    <button className="main-btn" style={{width : '100%', justifyContent : "center"}}
                    onClick={()=>{login()}}>
                        {t("witheList_conection")}
                    </button>
                    }
                </Section>
            </div>
        </>
    )
}