import React, { useState } from 'react'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'

function VerifyOtp() {

  const location = useLocation()
  const navigate = useNavigate()

  const tokenFromRegister = location.state?.token || ""

  const [otpData, setOtpData] = useState({
    otp: "",
    token: tokenFromRegister
  })

  function handleChange(e) {
    setOtpData({
      ...otpData,
      [e.target.name]: e.target.value
    })
  }

  async function handleSubmit(e) {
    e.preventDefault()

    try {

      const payload = {
        otp: otpData.otp,
        token: otpData.token
      }

      console.log("Sending:", payload)

      const res = await axios.post(
        "https://ecomflask.duckdns.org/api/admin/verify-otp",
        payload,
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      )

      console.log(res.data)

      alert("Admin Registered Successfully")

      navigate("/login")

    } catch (error) {
      console.log(error.response?.data || error.message)
      alert("Invalid OTP")
    }
  }

  return (
    <div>

      <h1>Verify OTP</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="otp"
          placeholder="Enter OTP"
          value={otpData.otp}
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">
          Verify OTP
        </button>

      </form>

    </div>
  )
}

export default VerifyOtp