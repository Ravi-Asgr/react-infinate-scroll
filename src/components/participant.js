
export const Participant = ( {item, toggle} ) => {
    return (
        <li className="tasks-item">
            <div className="card task-card">
                <div className="card-input">
                    <p className="task-label">
                        {item.name}
                    </p>
                </div>
                <div className="card-input">
                    <p className="task-label">
                        {item.trips}
                    </p>
                </div>
                <div className="card-badge cyan radius-pill">Active</div>
                <div className="card-badge red" onClick={() => toggle(item)}>De-activate</div>
            </div>
        </li>
    );
};