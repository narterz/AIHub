"use client";

import { AuthModal } from "@/app/types";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks";
import { toggleLoginModal, eventsSelector} from "@/app/lib/reducers/eventsSlice";
import { authSelector, setDisplayName, setUSername } from "@/app/lib/reducers/authSlice";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { useState, ChangeEvent } from "react";

//TODO: Make form styles change based on formType

export const ModalLg: FC<AuthModal> = ({ title, closeModal, formType }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const dispatch = useAppDispatch();
  const { openLoginModal } = useAppSelector(eventsSelector);
  const { username, displayName } = useAppSelector(authSelector);

  const useFormType = (formType: AuthModal['formType']) => {
    const fields = {
      login: [
        {
          name: "Username",
          type: "text",
          placeholder: "username",
          onChange: (e: ChangeEvent<HTMLInputElement>) =>
            dispatch(setUSername(e.target.value)),
        },
        {
          name: "Password",
          type: "password",
          placeholder: "password",
          onChange: (e: ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value),
        },
      ],
      register: [
        {
          name: "First Name",
          type: "text",
          placeholder: "first name",
          onChange: (e: ChangeEvent<HTMLInputElement>) =>
            setFirstName(e.target.value),
        },
        {
          name: "Last Name",
          type: "text",
          placeholder: "last name",
          onChange: (e: ChangeEvent<HTMLInputElement>) =>
            setLastName(e.target.value),
        },
        {
          name: "Username",
          type: "text",
          placeholder: "username",
          onChange: (e: ChangeEvent<HTMLInputElement>) =>
            dispatch(setUSername(e.target.value)),
        },
        {
          name: "Password",
          type: "password",
          placeholder: "password",
          onChange: (e: ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value),
        },
        {
          name: "Confirm Password",
          type: "password",
          placeholder: "confirm password",
          onChange: (e: ChangeEvent<HTMLInputElement>) =>
            setConfirmPassword(e.target.value),
        },
      ],
    };

    return fields[formType];
  };

  return (
    <div
      className={`
                fixed inset-0 flex justify-center items-center
                transition-colors
                ${openLoginModal ? "bg-black bg-opacity-50" : "invisible"}
        `}
    >
      <div
        className={`bg-background rounded-xl shadow p-6 transition-all
                ${openLoginModal ? "scale-100" : "scale-0"}`}
      >
        <div className="w-3/4 h-full relative flex flex-col items-center justify-around">
          <div className="absolute top-0 right-0"></div>
          <div className="w-full h-1/6">
            <h3>{title}</h3>
          </div>
          <form
            action=""
            className="w-full h-4/6 flex flex-col justify-around items-center"
          >
            {useFormType(formType).map((field, idx) => (
              <div
                key={idx}
                className="w-full h-1/5 flex flex-col justify-around items-center"
              >
                <h4>{field.name}</h4>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  onChange={field.onChange}
                />
              </div>
            ))}
            <div className="w-full h-2/5 flex flex-col justify-around items-center">
              <h4>Username</h4>
              <input type="text" />
            </div>
            <div className="w-full h-2/5 flex flex-col justify-around items-center">
              <h4>Password</h4>
              <input type="text" />
            </div>
            <div className="w-full h-1/5 flex flex-col items-end justify-around">
              <button className="btn-sm text-accent bg-transparent">
                Forgot password
              </button>
              <button className="btn-sm">SIGN IN</button>
            </div>
          </form>
          <div className="w-full h-1/6 flex flex-col justify-around items-center">
            <button className="btn-lg">
              <p>Sign in with Facebook</p>
            </button>
            <button className="btn-lg">
              <p>Sign in with Google</p>
            </button>
          </div>
        </div>
        <div className="bg-modal-image w-1/4 h-full"></div>
      </div>
    </div>
  );
};
