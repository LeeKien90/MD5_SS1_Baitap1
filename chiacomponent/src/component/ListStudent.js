import React, { Component } from 'react'
import Student from './Student'

export default class ListStudent extends Component {
  render() {
    return (
        <div className="table-responsive pt-3">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Mã sinh viên</th>
              <th>Tên sinh viên</th>
              <th>Tuổi</th>
              <th>Giới tính</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
             <Student></Student>
          </tbody>
        </table>
      </div>
    )
  }
}
