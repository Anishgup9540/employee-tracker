import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../reduxtoolkit/store/store";
import { updateUser } from "../reduxtoolkit/slices/authSlice";
import "./Score.scss";

const Score = () => {
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.auth.currentUser);

    const [isEditing, setIsEditing] = useState(false);
    const [metrics, setMetrics] = useState(user?.performanceMetrics || {});
    const [userScore, setUserScore] = useState(user?.score || 0);

    if (!user) {
        return <div className="profile-page">No user data found.</div>;
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setMetrics({
            ...metrics,
            [name]: name.includes("Score") || name.includes("Percentage") || name === "callsHandled" || name === "customerSatisfaction" || name === "closedTickets"
                ? parseInt(value)
                : value,
        });
    };

    const handleScoreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserScore(parseInt(e.target.value));
    };

    const handleSave = () => {
        const updatedUser = {
            ...user,
            score: userScore,
            performanceMetrics: metrics,
        };
        dispatch(updateUser(updatedUser));
        setIsEditing(false);
    };

    return (
        <div className="profile-page">
            <h2 className="profile-heading">Performance Overview</h2>

            <div className="profile-info">
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Join Date:</strong> {user.joinDate}</p>
                <p><strong>Score:</strong>
                    {isEditing ? (
                        <input
                            type="number"
                            name="score"
                            value={userScore}
                            onChange={handleScoreChange}
                        />
                    ) : (
                        userScore ?? "N/A"
                    )}
                </p>
            </div>

            {metrics && (
                <div className="performance-metrics">
                    <h3>Performance Metrics</h3>
                    {isEditing ? (
                        <>
                            <p>
                                <strong>Calls Handled:</strong>{" "}
                                <input
                                    type="number"
                                    name="callsHandled"
                                    value={metrics.callsHandled || 0}
                                    onChange={handleChange}
                                />
                            </p>
                            <p>
                                <strong>Customer Satisfaction:</strong>{" "}
                                <input
                                    type="number"
                                    name="customerSatisfaction"
                                    value={metrics.customerSatisfaction || 0}
                                    onChange={handleChange}
                                />
                            </p>
                            <p>
                                <strong>Avg. Response Time:</strong>{" "}
                                <input
                                    type="text"
                                    name="responseTime"
                                    value={metrics.responseTime || ""}
                                    onChange={handleChange}
                                />
                            </p>
                            <p>
                                <strong>Closed Tickets:</strong>{" "}
                                <input
                                    type="number"
                                    name="closedTickets"
                                    value={metrics.closedTickets || 0}
                                    onChange={handleChange}
                                />
                            </p>
                            <p>
                                <strong>Leetcode Score:</strong>{" "}
                                <input
                                    type="number"
                                    name="leetcodeScore"
                                    value={metrics.leetcodeScore || 0}
                                    onChange={handleChange}
                                />
                            </p>
                            <p>
                                <strong>Hackerrank Score:</strong>{" "}
                                <input
                                    type="number"
                                    name="hackerrankScore"
                                    value={metrics.hackerrankScore || 0}
                                    onChange={handleChange}
                                />
                            </p>
                            <p>
                                <strong>Week 1 Score:</strong>{" "}
                                <input
                                    type="number"
                                    name="week1Score"
                                    value={metrics.week1Score || 0}
                                    onChange={handleChange}
                                />
                            </p>
                            <p>
                                <strong>Week 2 Score:</strong>{" "}
                                <input
                                    type="number"
                                    name="week2Score"
                                    value={metrics.week2Score || 0}
                                    onChange={handleChange}
                                />
                            </p>
                            <p>
                                <strong>Week 3 Score:</strong>{" "}
                                <input
                                    type="number"
                                    name="week3Score"
                                    value={metrics.week3Score || 0}
                                    onChange={handleChange}
                                />
                            </p>
                            <p>
                                <strong>Assignment 1 Percentage:</strong>{" "}
                                <input
                                    type="number"
                                    name="assignment1Percentage"
                                    value={metrics.assignment1Percentage || 0}
                                    onChange={handleChange}
                                />
                            </p>
                            <p>
                                <strong>Assignment 2 Percentage:</strong>{" "}
                                <input
                                    type="number"
                                    name="assignment2Percentage"
                                    value={metrics.assignment2Percentage || 0}
                                    onChange={handleChange}
                                />
                            </p>
                            <p>
                                <strong>Assignment 3 Percentage:</strong>{" "}
                                <input
                                    type="number"
                                    name="assignment3Percentage"
                                    value={metrics.assignment3Percentage || 0}
                                    onChange={handleChange}
                                />
                            </p>
                            <p>
                                <strong>EF Test Score:</strong>{" "}
                                <input
                                    type="number"
                                    name="EFTestScore"
                                    value={metrics.EFTestScore || 0}
                                    onChange={handleChange}
                                />
                            </p>
                            <p>
                                <strong>Learning Certificates Done:</strong>{" "}
                                <input
                                    type="text"
                                    name="learningCertificatesDone"
                                    value={metrics.learningCertificatesDone?.join(", ") || ""}
                                    onChange={handleChange}
                                />
                            </p>
                            <p>
                                <strong>Courses Completed:</strong>{" "}
                                <input
                                    type="text"
                                    name="coursesCompleted"
                                    value={metrics.coursesCompleted?.join(", ") || ""}
                                    onChange={handleChange}
                                />
                            </p>
                            <p>
                                <strong>Mock Evaluation 1 Score:</strong>{" "}
                                <input
                                    type="number"
                                    name="mockEvaluation1Score"
                                    value={metrics.mockEvaluation1Score || 0}
                                    onChange={handleChange}
                                />
                            </p>
                            <p>
                                <strong>Mock Evaluation 2 Score:</strong>{" "}
                                <input
                                    type="number"
                                    name="mockEvaluation2Score"
                                    value={metrics.mockEvaluation2Score || 0}
                                    onChange={handleChange}
                                />
                            </p>
                            <p>
                                <strong>Mock Evaluation 3 Score:</strong>{" "}
                                <input
                                    type="number"
                                    name="mockEvaluation3Score"
                                    value={metrics.mockEvaluation3Score || 0}
                                    onChange={handleChange}
                                />
                            </p>
                        </>
                    ) : (
                        <>
                            <p><strong>Calls Handled:</strong> {metrics.callsHandled}</p>
                            <p><strong>Customer Satisfaction:</strong> {metrics.customerSatisfaction}%</p>
                            <p><strong>Avg. Response Time:</strong> {metrics.responseTime}</p>
                            <p><strong>Closed Tickets:</strong> {metrics.closedTickets}</p>
                            <p><strong>Leetcode Score:</strong> {metrics.leetcodeScore}</p>
                            <p><strong>Hackerrank Score:</strong> {metrics.hackerrankScore}</p>
                            <p><strong>Week 1 Score:</strong> {metrics.week1Score}</p>
                            <p><strong>Week 2 Score:</strong> {metrics.week2Score}</p>
                            <p><strong>Week 3 Score:</strong> {metrics.week3Score}</p>
                            <p><strong>Assignment 1 Percentage:</strong> {metrics.assignment1Percentage}%</p>
                            <p><strong>Assignment 2 Percentage:</strong> {metrics.assignment2Percentage}%</p>
                            <p><strong>Assignment 3 Percentage:</strong> {metrics.assignment3Percentage}%</p>
                            <p><strong>EF Test Score:</strong> {metrics.EFTestScore}</p>
                            <p><strong>Learning Certificates Done:</strong> {metrics.learningCertificatesDone?.join(", ")}</p>
                            <p><strong>Courses Completed:</strong> {metrics.coursesCompleted?.join(", ")}</p>
                            <p><strong>Mock Evaluation 1 Score:</strong> {metrics.mockEvaluation1Score}</p>
                            <p><strong>Mock Evaluation 2 Score:</strong> {metrics.mockEvaluation2Score}</p>
                            <p><strong>Mock Evaluation 3 Score:</strong> {metrics.mockEvaluation3Score}</p>
                        </>
                    )}
                </div>
            )}

            <div className="profile-buttons">
                {isEditing ? (
                    <>
                        <button onClick={handleSave}>Save</button>
                        <button onClick={() => setIsEditing(false)}>Cancel</button>
                    </>
                ) : (
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                )}
            </div>
        </div>
    );
};

export default Score;
