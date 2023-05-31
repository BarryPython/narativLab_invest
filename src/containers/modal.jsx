import { useState } from 'react';
import { useTranslation } from 'react-i18next';

//svg
import { ReactComponent as Close } from "../assets/icons/close.svg";
import usdc from "../assets/icons/usdc.png";

import "../style/modal.scss"

export default function Modal({active, setActive}){

    const {t} = useTranslation()
    const [usdcInvest, setUsdcInvest] = useState(0)

    function usdcToNrt(usdc){
        //TODO change this function to convert usdc to NRT with the correct rate
        return usdc / 0.01
    }

    function buy(e){
        e.preventDefault() //do not remove this line
        //TODO bellow make the magic to buy NRT
        console.log(usdcInvest)
    }

    function handleSectionClick(e) {
        e.stopPropagation();
    }
    
    return(
        active ?
        <div className="modal-container" onClick={()=>{setActive(false)}}>
            <section onClick={handleSectionClick}>
                <div className="header">
                    <h2>{t("invest")}</h2>
                    <button onClick={()=>{setActive(false)}}>
                        <Close/>
                    </button>
                </div>
                <form onSubmit={(e)=>{buy(e)}}>
                    <div>
                        <label>{t("invest_deposit")}</label>
                        <span>
                            <img src={usdc} alt=""/>
                            <input type="number" placeholder="0" onChange={(e)=>{setUsdcInvest(e.target.value)}}/>
                        </span>
                    </div>
                    <div>
                        <p>{t("invest_aquired")}</p>
                        <p><strong>{usdcToNrt(usdcInvest)} NRT</strong></p>
                    </div>
                    <button className="main-btn" style={{width : '100%', justifyContent : "center", marginTop : "20px"}}>
                        {t("buy")}
                    </button>
                </form>
            </section>
        </div>
        : null
    )
}