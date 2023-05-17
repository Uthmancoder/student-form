import React, { useState } from 'react';

const Studentregister = () => {
    const [email, setemail] = useState("");
    const [surname, setsurname] = useState("");
    const [name, setname] = useState("");
    const [Id, setId] = useState("");
    const [level, setlevel] = useState("");
    const [allValue, setallValue] = useState([]);

    const submit = () => {
        const newContent = { email, surname, name, Id, level, index: allValue.length };
        setallValue([...allValue, newContent]);
        setemail("");
        setsurname("");
        setname("");
        setId("");
        setlevel("");
    };

    const deleteuser = (i)=>{
        console.log(i);
        let curuser = allValue;
        curuser.splice(i, 1)
        setallValue([...curuser])
    }
    return (
        <div>
            <div className="App">
                <div className="container">
                    <div>
                        <div className="form mx-auto border shadow my-5">
                            <p className="title">Student Register</p>
                            <p className="message">Signup now and get full access to our app.</p>
                            <div className="flex">
                                <label>
                                    <input
                                        required=""
                                        placeholder=""
                                        type="text"
                                        onChange={(e) => setsurname(e.target.value)}
                                        className="input"
                                        value={surname}
                                    />
                                    <span>Firstname</span>
                                </label>

                                <label>
                                    <input
                                        required=""
                                        onChange={(e) => setname(e.target.value)}
                                        placeholder=""
                                        type="text"
                                        value={name}
                                        className="input"
                                    />
                                    <span>Lastname</span>
                                </label>
                            </div>

                            <label>
                                <input
                                    required=""
                                    placeholder=""
                                    onChange={(e) => setemail(e.target.value)}
                                    type="email"
                                    value={email}
                                    className="input"
                                />
                                <span>Email</span>
                            </label>
                            <label>
                                <input
                                    required=""
                                    placeholder=""
                                    onChange={(e) => setId(e.target.value)}
                                    type="number"
                                    value={Id}
                                    className="input"
                                />
                                <span> Student Id</span>
                            </label>

                            <label>
                                <input
                                    required=""
                                    placeholder=""
                                    onChange={(e) => setlevel(e.target.value)}
                                    type="Text"
                                    value={level}
                                    className="input"
                                />
                                <span>Level</span>
                            </label>
                            <button onClick={submit} class="submit">
                                Submit
                            </button>
                        </div>
                    </div>

                    {allValue == "" ? "There are no  students currently" :
                        <table className='w-75 rounded-2 border mx-auto'>
                            <thead className='border w-100'>
                                <th className='mx-3 p-2 border'>S/N</th>
                                <th className='mx-3 p-2 border'>Name</th>
                                <th className='mx-3 p-2 border'>Email</th>
                                <th className='mx-3 p-2 border'>Student Id</th>
                                <th className='mx-3 p-2 border'>Level</th>           
                                <th className='mx-3 p-2 border'>Action</th>
                            </thead>
                            <tbody className='border  w-100 h-10'>
                                {allValue.map((el, i) => (
                                    <tr key={i}>
                                        <td className='p-2 border'>{i + 1}</td>
                                        <td className='p-2 border'>{el.surname} <span>{el.name}</span></td>
                                        <td className='p-2 border'>{el.email}</td>
                                        <td className='p-2 border'>{el.Id}</td>
                                        <td className='p-2 border'>{el.level}</td>
                                        <td className='p-2 border'><button onClick={deleteuser} className='btn btn-danger'>&times;</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    }
                </div>
            </div>
        </div>
    );
};


export default Studentregister;