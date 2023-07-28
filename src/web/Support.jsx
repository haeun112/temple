import Layout from "../component/Layout/Layout";
import {useParams} from "react-router-dom";

function Support() {
    const {url} = useParams();

    return (
        <Layout url={url}>
            <main>
                <hr className="bg-secondary my-0"/>
                <div className="container mt-3">
                    <div className="d-block row">
                        <div id="carouselExampleDark" className="carousel carousel-dark slide"
                             data-bs-ride="carousel"
                             data-bs-interval="false">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0"
                                        className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                                        aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
                                        aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3"
                                        aria-label="Slide 4"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="/image/support/법회_11.jpg" className="d-block w-100"
                                         alt="TY웰컴케어소개1"/>
                                </div>
                                <div className="carousel-item">
                                    <img src="/image/support/법회_22.jpg" className="d-block w-100"
                                         alt="TY웰컴케어소개2"/>
                                </div>
                                <div className="carousel-item">
                                    <img src="/image/support/법회_33.jpg" className="d-block w-100"
                                         alt="TY웰컴케어소개3"/>
                                </div>
                                <div className="carousel-item">
                                    <img src="/image/support/법회_44.jpg" className="d-block w-100"
                                         alt="TY웰컴케어소개4"/>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button"
                                    data-bs-target="#carouselExampleDark"
                                    data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button"
                                    data-bs-target="#carouselExampleDark"
                                    data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>

             
                    <br></br>
                    <div className="d-xl-flex w-100 me-5 mb-4">
                        <div className="d-flex justify-content-center align-items-center me-xl-4"><img
                            src="/image/icons/button_33.png" className="d-block w-100" alt="..."/></div>
                        <div className="d-flex flex-column justify-content-center w-100">
                            <div className="fs-4 mb-1 text-pet">불공 안내</div>
                            <div>1년 단위의 불공 일정을 한번에! 지금 바로 확인하세요.</div>
                            <button type="button" className="btn btn-outline-pet mt-4 py-3" data-bs-toggle="modal"
                                    data-bs-target="#comparison_modal">
                                <i className="bi bi-check2-circle me-1"></i>확인하기
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}

export default Support;