import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {

    faCircleCheck
} from '@fortawesome/free-solid-svg-icons';

const followData = [
    {
        name: 'Salman Khan',
        username: '@BeingSalmanKhan',
        img: 'https://upload.wikimedia.org/wikipedia/commons/8/89/SalmanKhan.jpg',
    },
    {
        name: 'Shah Rukh Khan',
        username: '@iamsrk',
        img: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Shah_Rukh_Khan_grayscale.jpg',
    },
    {
        name: 'Sachin Tendulkar',
        username: '@sachin_rt',
        img: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Sachin_tendulkar_bw.jpg',
    },
];

const WhoToFollow = () => {
    return (
        <div className="bg-white text-black rounded p-3 my-3 mx-3 border">
            <h5 className="fw-bold mb-3">Who to follow</h5>

            {followData.map((user, idx) => (
                <div className="d-flex align-items-center justify-content-between mb-3" key={idx}>
                    <div className="d-flex align-items-center">
                        <img
                            src={user.img}
                            alt={user.name}
                            className="rounded-circle me-2"
                            style={{ width: '45px', height: '45px', objectFit: 'cover' }}
                        />
                        <div>
                            <div className="fw-bold d-flex align-items-center">
                                {user.name}
                                <FontAwesomeIcon icon={faCircleCheck} className="me-1" />
                            </div>
                            <div className="text-muted small">{user.username}</div>
                        </div>
                    </div>
                    <button className="btn btn-primary fs-6 fw-bold px-3 rounded-pill">Follow</button>
                </div>
            ))}

            <a href="#" className="text-primary small">Show more</a>
        </div>
    );
};

export default WhoToFollow;
