import React, { useState, useEffect } from 'react';

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

    useEffect(() => {
        localStorage.setItem("userdetails", JSON.stringify(allValue))
    }, [allValue])



    const deleteuser = (i) => {
        console.log(i);
        let curuser = allValue;
        curuser.splice(i, 1)
        setallValue([...curuser])
    }
    const [screenValue, setScreenValue] = useState('');

    const addnumb = (event) => {
        const digit = event.target.value;
        setScreenValue((prevValue) => prevValue + digit);
    };
    const equalsto = () => {
        try {
          const result = new Function(`return ${screenValue}`)();
          setScreenValue(result);
        } catch (error) {
          console.log('Error evaluating expression:', error);
        }
      };
      
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

            {/*Crreating scientific caculator */}
            <div className='card w-25 mx-auto p-4 bg-secondary my-5'>
                <div className='screen bg-dark text-light text-end p-3 w-10' id='screen'>{screenValue}</div>
                <div className='buttons text-center'>
                    <button className='btn  btn-light m-2' onClick={addnumb} value="1">1</button>
                    <button className='btn  btn-light m-2' onClick={addnumb} value="2">2</button>
                    <button className='btn  btn-light m-2' onClick={addnumb} value="3">3</button>
                    <button className='btn  btn-light m-2' onClick={addnumb} value="4">4</button>
                    <button className='btn  btn-light m-2' onClick={addnumb} value="5">5</button>
                    <button className='btn  btn-light m-2' onClick={addnumb} value="6">6</button>
                    <button className='btn  btn-light m-2' onClick={addnumb} value="7">7</button>
                    <button className='btn  btn-light m-2' onClick={addnumb} value="8">8</button>
                    <button className='btn  btn-light m-2' onClick={addnumb} value="9">9</button>
                    <button className='btn  btn-light m-2' onClick={addnumb} value="0">0</button>
                    <button className='btn  btn-light m-2' onClick={addnumb} value="+">+</button>
                    <button className='btn  btn-light m-2' onClick={addnumb} value="-">-</button>
                    <button className='btn  btn-light m-2' onClick={addnumb} value="*">*</button>
                    <button className='btn  btn-light m-2' onClick={addnumb} value="/">/</button>
                    <button className='btn  btn-light m-2' onClick={equalsto} value="=">=</button>
                </div>
            </div>
        </div>
    );
};


export default Studentregister;