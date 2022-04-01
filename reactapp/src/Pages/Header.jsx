import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
        <nav>
            <Link to={""}>PhD Admission Portal</Link>
            <Link to={"/admin/student"} >Student</Link>
        </nav>

    </div>
  )
}
