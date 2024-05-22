import React, { useState } from "react";
import ProfileForm from "./ProfileForm";
import PasswordChangeForm from "./PasswordChangeForm";

function Profile() {
  const [activeTab, setActiveTab] = useState("account-general");

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div>
      <h4 className="font-weight-bold py-3 mb-4">Hồ sơ</h4>
      <div className="card overflow-hidden">
        <div className="row no-gutters row-bordered row-border-light">
          <div className="col-md-3 pt-0">
            <div className="list-group list-group-flush account-settings-links">
              <a
                className={`list-group-item list-group-item-action ${
                  activeTab === "account-general" ? "active" : ""
                }`}
                onClick={() => handleTabChange("account-general")}
              >
                Chung
              </a>
              <a
                className={`list-group-item list-group-item-action ${
                  activeTab === "account-change-password" ? "active" : ""
                }`}
                onClick={() => handleTabChange("account-change-password")}
              >
                Mật khẩu
              </a>
            </div>
          </div>
          <div className="col-md-9">
            <div className="tab-content">
              <div
                className={`tab-pane fade ${
                  activeTab === "account-general" ? "active show" : ""
                }`}
                id="account-general"
              >
                <ProfileForm />
              </div>
              <div
                className={`tab-pane fade ${
                  activeTab === "account-change-password" ? "active show" : ""
                }`}
                id="account-change-password"
              >
                <PasswordChangeForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-right mt-3 mb-4">
        <button type="button" className="btn btn-primary">
          Save changes
        </button>
        &nbsp;
        <button type="button" className="btn btn-default">
          Cancel
        </button>
      </div>
    </div>
  );
}

export default Profile;
