import React from 'react';

const Header = ({ tableNumber }) => {
    return (
        <header className="app-header">
            <h1>The CourtYard Diaries</h1>
            {tableNumber && <p className="table-info">Table #{tableNumber}</p>}
        </header>
    );
};

export default Header;