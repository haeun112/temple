import Layout from "../component/Layout/Layout";
import {useParams} from "react-router-dom";
import {useEffect} from "react";

function Claims() {
    const {url} = useParams();

    return (
        <Layout url={url}>
            <main>
                <hr className="bg-secondary my-0"/>
                <img src="/image/claims/temple44.jpg" className="d-block mt-4 mb-5 w-100" alt="..."/>
                <div className="container mt-3">
                    <div className="d-xl-flex w-100 me-5 mb-4">
                        <div className="d-flex justify-content-center align-items-center me-xl-4"><img
                            src="/image/icons/button_44.png" className="d-block w-100" alt="..."/></div>
                        <div className="d-flex flex-column justify-content-center w-100">
                            <div className="fs-4 mb-1 text-pet">사찰 찾기</div>
                            <div>집 근처 사찰이 궁금하신가요? 편하게 검색해보세요.</div>
                            <button type="button" className="btn btn-outline-pet mt-4 py-3" target="_blank"
                                    onClick="javascript:location.href='https://bocare.co.kr/v2/views/planner/insuranceRequest/agree/index.html?phone=18770117&loc=findfp'">
                                <i
                                    className="bi bi-check2-circle me-1"></i>검색하기
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}

export default Claims;