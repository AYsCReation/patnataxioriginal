import React from 'react'
import "../Frontend/Style/SuccessBooking.css"
const SuccessBooking = () => {
    setTimeout(() => {
        window.location.reload();
      }, 3000);
    
    return (
        <>
            <div className="box">
                <div className="success alert">
                    <div className="alert-body">
                        Booking Success ! <br /> Our drivers will contact you soon. Stay Tuned!
                    </div>

                </div>
            </div>
        </>
    )
}

export default SuccessBooking
