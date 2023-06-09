
export const Participant = () => {
    return (
        <li className="tasks-item">
            <div className="card task-card">
                <div className="card-input">
                    <p className="task-label">
                        Participant ID
                    </p>
                </div>
                <div className="card-input">
                    <p className="task-label">
                        Participant Name
                    </p>
                </div>
                <div className="card-badge cyan radius-pill">Active</div>
                <div className="card-badge red">De-activate</div>
            </div>
        </li>
    );
};