import "./form.css";
import img from './error-905.svg';
import { useFormik } from "formik";
import { validation } from "./validation";
import { useState } from "react";

export default function Form() {
  const [isSubmit, setIsSubmit] = useState(false)
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    companyUrl: "",
    role: "",
    whereToSell: "",
    industry: "",
    whoToSell: "",
    size: "",
    dealSize: "",
    revenue: "",
    howToFindLead: "",
    skills: "",
  };
  const { values, errors, onBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: validation,
    isInitialValid: false,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log(errors)
  const submit = () => {
    setIsSubmit(true)
  }
  return (
    <>
      <div className="content-wrapper">
        <h1>Let us define your Ideal Customer Profile</h1>
          {(errors && Object.keys(errors).length > 0 && isSubmit) ? (
          <div className="err">
            <img src={img} title="error icons" alt="error" />
            <div className="top-error">
              Form submission failed. Review the following information:
              {(errors.firstName || errors.lastName) ? "Your Name, " : ""}
              {errors.email ? "Your Email, " : ""}
              {errors.companyName ? "Your Company Name, " : ""}
              {errors.companyUrl ? "Your Company Website / URL, " : ""}
              {errors.role ? "Your Role / Designation, " : ""}
              {errors.whereToSell ? "Where do you want to sell?, " : ""}
              {errors.industry ? "Which industry do you focus on?, " : ""}
              {errors.whoToSell ? "Who do you sell to?, " : ""}
              {errors.howToFindLead ? "How do you find a good lead right now?, " : ""}
              {errors.skills
                ? "and What are the main skills / strengths that you position to win the deal?."
                : ""}
            </div>
          </div>
          ) : ''}
        <form onSubmit={handleSubmit}>
          <div className="heading">
            <span className="title">Your Name &nbsp;</span>
            <span>(required)</span>
          </div>
          {(errors.firstName || errors.lastName) && isSubmit && (
            <div className="err">
              <img
                src={img}
                title="error icons"
                alt="error"
                className="error2"
              />
              <div className="top-error">
                {errors.firstName ? errors.firstName : errors.lastName}
              </div>
            </div>
          )}
          <div className="form-group row">
            <div className="form-group">
              <label htmlFor="First Name" className="title">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                className={`input-box ${errors.firstName && isSubmit ? 'danger' : ''}`}
                onBlur={onBlur}
              />
            </div>
            <div className="form-group">
              <label htmlFor="First Name" className="title">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={values.lastName}
                onBlur={onBlur}
                onChange={handleChange}
                className={`input-box ${errors.lastName && isSubmit ? 'danger' : ''}`}
              />
            </div>
          </div>
          <div>
            <div className="name">
              <span className="title">Your Email &nbsp;</span>
              <span>(required)</span>
            </div>
            {errors.email && isSubmit && <div className="err">
              <img
                src={img}
                title="error icons"
                alt="error"
                className="error2"
              />
              <div className="top-error">{errors.email}</div>
            </div>}
            <input
              type="text"
              name="email"
              value={values.email}
              onBlur={onBlur}
              className={`input-box ${errors.email && isSubmit ? 'danger' : ''}`}
              onChange={handleChange}
            />
          </div>
          <div>
            <div className="name">
              <span className="title">Your Company Name &nbsp;</span>
              <span>(required)</span>
            </div>
            {errors.companyName && isSubmit && <div className="err">
              <img
                src={img}
                title="error icons"
                alt="error"
                className="error2"
              />
                <div className="top-error">{errors.companyName}</div>
            </div>}
            <input
              type="text"
              name="companyName"
              value={values.companyName}
              onBlur={onBlur}
              onChange={handleChange}
              className={`input-box ${errors.companyName && isSubmit ? 'danger' : ''}`}
            />
          </div>
          <div>
            <div className="name">
              <span className="title">Your Company Website / URL &nbsp;</span>
              <span>(required)</span>
            </div>
            {errors.companyUrl && isSubmit && <div className="err">
              <img
                src={img}
                title="error icons"
                alt="error"
                className="error2"
              />
                <div className="top-error">{errors.companyUrl}</div>
            </div>}
            <input
              type="text"
              name="companyUrl"
              value={values.companyUrl}
              onBlur={onBlur}
              onChange={handleChange}
              className={`input-box space ${errors.companyUrl && isSubmit ? 'danger' : ''}`}
            />
            <span className="http">http://</span>
          </div>
          <div>
            <div className="name">
              <span className="title">Your Role / Designation &nbsp;</span>
              <span>(required)</span>
            </div>
            {errors.role && isSubmit && <div className="err">
              <img
                src={img}
                title="error icons"
                alt="error"
                className="error2"
              />
              <div className="top-error">{errors.role}</div>
            </div>}
            <input
              type="text"
              name="role"
              value={values.role}
              onBlur={onBlur}
              onChange={handleChange}
              className={`input-box ${errors.role && isSubmit ? 'danger' : ''}`}
            />
          </div>
          <div className="name">
            <div className="title layout">Customer Profile Details</div>
            <div className="font-style">
              Attributes to create an Ideal Customer Profile
            </div>
          </div>
          <hr />
          <div>
            <div className="name">
              <span className="title">Where do you want to sell? &nbsp;</span>
              <span>(required)</span>
            </div>
            {errors.whereToSell && isSubmit && <div className="err">
              <img
                src={img}
                title="error icons"
                alt="error"
                className="error2"
              />
                <div className="top-error">{errors.whereToSell}</div>
            </div>}
            <textarea
              type="text"
              placeholder="City, State, Country - Add multiple"
              className={`input ${errors.whereToSell && isSubmit ? 'danger' : ''}`}
              name="whereToSell"
              defaultValue={values.whereToSell}
              onChange={handleChange}
            ></textarea>
          </div>
          <div>
            <div className="name">
              <span className="title">
                Which industry do you focus on? &nbsp;
              </span>
              <span>(required)</span>
            </div>
            {errors.industry && isSubmit && <div className="err">
              <img
                src={img}
                title="error icons"
                alt="error"
                className="error2"
              />
                <div className="top-error">{errors.industry}</div>
            </div>}
            <textarea
              type="text"
              placeholder="Industry Domain, Industry Subdomains - Add multiple"
              className={`input ${errors.industry && isSubmit ? 'danger' : ''}`}
              name="industry"
              defaultValue={values.industry}
              onBlur={onBlur}
              onChange={handleChange}
            ></textarea>
          </div>
          <div>
            <div className="name">
              <span className="title">Who do you sell to? &nbsp;</span>
              <span>(required)</span>
            </div>
            {errors.whoToSell && isSubmit && <div className="err">
              <img
                src={img}
                title="error icons"
                alt="error"
                className="error2"
              />
                <div className="top-error">{errors.whoToSell}</div>
            </div>}
            <textarea
              type="text"
              placeholder="Roles / Designations - Add multiple"
              className={`input ${errors.whoToSell && isSubmit ? 'danger' : ''}`}
              name="whoToSell"
              defaultValue={values.whoToSell}
              onBlur={onBlur}
              onChange={handleChange}
            ></textarea>
          </div>
          <div>
            <div className="name">
              <span className="title">
                What is the size of the company who you sell to? &nbsp;
              </span>
              <span>(required)</span>
            </div>
            <select name="size" defaultValue={values.whoToSell} onBlur={onBlur}
              onChange={handleChange} className="input-box">
              <option value="null">Choose what suits best</option>
              <option value="1-10">1-10</option>
              <option value="11-50">11-50</option>
              <option value="51-200">51-200</option>
              <option value="201-500">201-500</option>
              <option value="1001-5000">1001-5000</option>
              <option value="5001-10000">5001-10000</option>
              <option value="10000+">10000+</option>
            </select>
          </div>
          <div className="heading">
            <div className="name">
              <span className="title">
                What is the revenue of the company you sell to?&nbsp;
              </span>
              <span>(required)</span>
            </div>
            <select name="revenue" defaultValue={values.whoToSell} onBlur={onBlur}
              onChange={handleChange} className="input-box">
              <option value="null">Choose what suits best</option>
              <option value="$ 0 - 500000">$ 0 - 500000</option>
              <option value="$ 500000 - 1000000">$ 500001 - 1000000</option>
              <option value="$ 1000001 - 10000000">$ 1000001 - 10000000</option>
              <option value="201-500">201-500</option>
              <option value="1001-5000">1001-5000</option>
              <option value="5001-10000">5001-10000</option>
              <option value="$ 10000001">$ 10000001</option>
            </select>
          </div>
          <div>
            <div className="title">What is your average deal size?</div>
            <div>
              <input
                type="text"
                name="dealSize"
                value={values.dealSize}
                onBlur={onBlur}
                onChange={handleChange}
                className={`size-input ${errors.dealSize ? 'danger' : ''}`}
              />
            </div>
            <span className="symbol">$</span>
          </div>
          <div>
            <div className="name">
              <span className="title">
                How do you find a good lead right now?&nbsp;
              </span>
              <span>(required)</span>
            </div>
            {errors.howToFindLead && isSubmit && <div className="err">
              <img
                src={img}
                title="error icons"
                alt="error"
                className="error2"
              />
              <div className="top-error">{errors.howToFindLead}</div>
            </div>}
            <textarea
              type="text"
              placeholder="Please help us understand the process you follow to find good leads today. How do you get to know that a company is looking for services you offer?"
              className={`input ${errors.howToFindLead && isSubmit ? 'danger' : ''}`}
              name="howToFindLead"
              defaultValue={values.howToFindLead}
              onBlur={onBlur}
              onChange={handleChange}
            ></textarea>
          </div>
          <div>
            <div className="name">
              <span className="title">
                What are the main skills / strengths that you position to win
                the deal?&nbsp;
              </span>
              <span>(required)</span>
            </div>
            {errors.skills && isSubmit && <div className="err">
              <img
                src={img}
                title="error icons"
                alt="error"
                className="error2"
              />
                <div className="top-error">{errors.skills}</div>
            </div>}
            <textarea
              type="text"
              placeholder="Technologies / Services / Capabilities - Add multiple"
              className={`input ${errors.skills && isSubmit ? 'danger' : ''}`}
              name="skills"
              defaultValue={values.skills}
              onBlur={onBlur}
              onChange={handleChange}
            ></textarea>
            <div>
              <input type="submit" onClick={submit} className="btn" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
