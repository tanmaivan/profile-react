import React, { useState } from "react";
import ProfilePhoto from "../assets/TVP.jpg";

function ProfileForm() {
  // Tạo state cho tất cả các trường và hàm cập nhật state
  const [formData, setFormData] = useState({
    fullName: "Tạ Việt Phương",
    employeeCode: "TVP001",
    position: "ceo",
    department: "sales",
    cccd: "051200005120",
    dateOfBirth: "",
    phoneNumber: "0987654321",
  });

  // Hàm cập nhật state khi có sự thay đổi
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="card-body">
      <div className="card-body media align-items-center">
        <img src={ProfilePhoto} alt="Profile" className="d-block ui-w-80" />
        <div className="media-body ml-4">
          <label className="btn btn-outline-primary">
            Tải ảnh lên
            <input type="file" className="account-settings-fileinput" />
          </label>
          &nbsp;
          <button type="button" className="btn btn-default md-btn-flat">
            Cài lại
          </button>
          <div className="text-light small mt-1">Cho phép JPG, GIF or PNG.</div>
        </div>
      </div>
      <hr className="border-light m-0" />
      <div className="form-group">
        <label className="form-label">Họ và tên</label>
        <input
          type="text"
          className="form-control mb-1"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label className="form-label">Mã NV</label>
        <input
          type="text"
          className="form-control mb-1"
          name="employeeCode"
          value={formData.employeeCode}
          onChange={handleInputChange}
        />
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label className="form-label">Chức vụ</label>
            <select
              className="form-control"
              name="position"
              value={formData.position}
              onChange={handleInputChange}
            >
              <option value="ceo">Giám đốc điều hành (CEO)</option>
              <option value="ceo">Giám đốc điều hành (CEO)</option>
              <option value="cto">Giám đốc công nghệ (CTO)</option>
              <option value="cfo">Giám đốc tài chính (CFO)</option>
              <option value="coo">Giám đốc vận hành (COO)</option>
              <option value="cmo">Giám đốc tiếp thị (CMO)</option>
              <option value="manager">Quản lý</option>
              <option value="team-lead">Trưởng nhóm</option>
              <option value="senior-developer">Nhà phát triển cao cấp</option>
              <option value="junior-developer">Nhà phát triển mới</option>
              <option value="staff">Nhân viên</option>
            </select>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label className="form-label">Phòng ban</label>
            <select
              className="form-control"
              name="department"
              value={formData.department}
              onChange={handleInputChange}
            >
              <option value="sales">Bán hàng</option>
              <option value="marketing">Tiếp thị</option>
              <option value="product-development">Phát triển sản phẩm</option>
              <option value="research">Nghiên cứu</option>
              <option value="customer-service">Dịch vụ khách hàng</option>
              <option value="hr">Nhân sự</option>
              <option value="finance">Tài chính</option>
              <option value="logistics">Logistics</option>
              <option value="it">Công nghệ thông tin</option>
            </select>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label className="form-label">CCCD</label>
            <input
              type="text"
              className="form-control"
              name="cccd"
              value={formData.cccd}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label className="form-label">Ngày sinh</label>
            <input
              type="date"
              className="form-control"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
      <div className="form-group">
        <label className="form-label">Số điện thoại</label>
        <input
          type="text"
          className="form-control"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
}

export default ProfileForm;
