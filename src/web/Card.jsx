import Layout from "../component/Layout/Layout";
import {useParams} from "react-router-dom";
import {useEffect} from "react";

function Card() {
    const {url} = useParams();

    return (
        <Layout url={url}>
            <main>
                <hr className="bg-secondary my-0"/>

                <div className="container mt-3">
                    <div>
                        <img src="/image/pet_card/pest_11.jpg" className="d-block w-100" alt="..."/>
                        <img src="/image/pet_card/pest_22.jpg" className="d-block w-100" alt="..."/>
                        <img src="/image/pet_card/pest_33.jpg" className="d-block w-100" alt="..."/>
                        <img src="/image/pet_card/pest_44.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="d-xl-flex w-100 me-5 mb-4">
                        <div className="d-flex justify-content-center align-items-center me-xl-4"><img
                            src="/image/icons/button_55.png" className="d-block w-100" alt="..."/></div>
                        <div className="d-flex flex-column justify-content-center w-100">
                            <div className="fs-4 mb-1 text-pet">축제 일정</div>
                            <div>전국 사찰의 모든 축제 일정을 확인해보세요.</div>
                            <button type="button" className="btn btn-outline-pet mt-4 py-3" target="_blank"
                                    onClick="javascript:location.href='https://www.samsungcard.com/home/card/cardinfo/PGHPPCCCardCardinfoDetails001?code=AAP1773&alncmpC=GP007465&affcode=GP007465'">
                                <i className="bi bi-check2-circle me-1"></i>보러가기
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}

export default Card;