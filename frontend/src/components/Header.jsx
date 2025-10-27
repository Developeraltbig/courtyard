import React from 'react';

const Header = ({ tableNumber }) => {
    // We use a custom class 'bg-primary-custom' which we'll define in our CSS
    return (
        <header className="bg-primary-custom p-3 text-center shadow-sm">
            <h1>The CourtYard Diaries</h1>
            {tableNumber && <p className="mb-0 fs-5">Table #{tableNumber}</p>}
        </header>
    );
};

export default Header;