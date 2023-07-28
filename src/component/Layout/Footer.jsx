function Footer(){
    return(
        <footer className="bg-dark text-light mt-auto py-4">
            <div className="container py-4">
                <div className="d-xl-flex justify-content-between">
                    <a className="" href="/" target="_self">
                        <img src="/image/logo/logo_mm.png" className="d-block w-50" alt="..."/>
                    </a>
                    <div className="text-pet mt-xxl-0 mt-3">
                        <div>CUSTOMER CENTER</div>
                        <div className="fs-3">Tel.032-876-3332</div>
                    </div>
                </div>
                <div className="d-xl-flex justify-content-between align-items-end fs-6_5">
                    <div className="mt-3 fs-6_5">
                        <div className="mt-1">· 대표 : 조하은</div>
                        <div className="mt-1">· 주소 : 인천 미추홀구 매소홀로488번길 6-32 태승빌딩 5층</div>
                        <div className="mt-1">· 평일 : 10:00~18:00 | 점심시간 : 12:30~13:30 | 주말/공휴일 : 휴무</div>
                        <div className="mt-1">· COPYRIGHT(c) 2023 인천일보아카데미 ALL RIGHTS RESERVED .</div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;