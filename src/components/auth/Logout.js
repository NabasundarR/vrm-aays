import React from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { FaSignOutAlt } from "react-icons/fa";

// Basic component with logout button
const Logout = () => { 
  const { oktaAuth } = useOktaAuth();

  const logout = async () => {
    // Will redirect to Okta to end the session then redirect back to the configured `postLogoutRedirectUri`
    await oktaAuth.signOut();
  };

  return (
    <>
      <div  onClick={logout} className="items_menu logoutCss">
        <div>
          <FaSignOutAlt fontSize={28} />
        </div>
        <div className="item_menuText">
          Logout
        </div>
      </div>
    </>
  );
};

export default Logout;