import { ClipLoader } from "react-spinners";

export const Spinner = () => {
    return(
        <div style={{ width: '100px', margin: '0 auto', display: 'block' }}>
            <ClipLoader color="#52bfd9" size={100} aria-label="Loading Spinner" data-testid="loader"/>
        </div>    
    );
};