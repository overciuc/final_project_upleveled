import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { useState } from 'react';

const userSectionGrid = css`
  max-width: 1300px;
  justify-content: center;
  margin: auto;
  display: grid;
  grid-template-columns: 70% 25%;
  grid-gap: 30px;
  list-style-type: none;
  margin-bottom: 50px;
  margin-top: 50px;
  @media screen and (max-width: 900px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

const userDetailsStyles = css`
  max-height: 600px;
  height: 600px;
  width: 100%;
  max-width: 900px;
  @media screen and (max-width: 900px) {
    width: 100%;
    display: flex;
    margin-left: 0px;
  }
`;

const detailsTableStyles = css`
  max-width: 800px;
  width: 100%;
  padding: 20px 30px;
  margin-left: 20px;
  @media screen and (max-width: 900px) {
    width: 100%;
    margin-left: 0px;
    margin-top: 40px;
  }
  > h2 {
    font-size: 24px;
    color: gray;
    @media screen and (max-width: 900px) {
      width: 100%;
    }
  }

  > div {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #0bc6d2;
    @media screen and (max-width: 900px) {
      width: 100%;
      display: flex;
      font-size: 18px;
      align-items: center;
    }
  }

  > div > span {
    margin-left: 20px;
    @media screen and (max-width: 900px) {
      margin-left: 0px;
    }
  }

  > div > span > input {
    border: none;
    margin-left: 10px;
    padding-left: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    width: 500px;
    height: 40px;
    transition: 0.3s ease-in-out;
    background-color: transparent;
    color: gray;
    font-size: 24px;
    font-weight: normal;
    @media screen and (max-width: 900px) {
      width: 100%;
      padding-left: 20px;
      padding-right: 10px;
      font-size: 18px;
      margin-left: 20px;
    }
    :focus {
      box-shadow: 0 0 10px rgba(11, 198, 210, 1);
      outline: none !important;
    }
  }

  > div + div + div > span > input {
    border: none;
    margin-left: 50px;
    padding-left: 10px;
    width: 500px;
    height: 40px;
    transition: 0.3s ease-in-out;
    background-color: transparent;
    color: gray;
    font-size: 24px;
    font-weight: normal;
    @media screen and (max-width: 900px) {
      width: 100%;
      padding-left: 25px;
      padding-right: 10px;
      font-size: 18px;
    }
    :focus {
      box-shadow: 0 0 10px rgba(11, 198, 210, 1);
      outline: none !important;
    }
  }
`;

const usernameStyles = css`
  color: gray;
  font-size: 24px;
  font-weight: normal;
  padding-left: 25px;
  @media screen and (max-width: 900px) {
    width: 100%;
    padding-left: 45px;
    padding-right: 10px;
    font-size: 18px;
  }
`;

const buttonSection = css`
  width: 300px;
  margin-top: 50px;
  float: right;
  text-align: center;
  @media screen and (max-width: 900px) {
    flex-direction: column;
    display: flex;
    width: 100%;
    float: right;
    padding-right: 20px;
    text-align: center;
    margin-top: -250px;
    position: relative;
  }
`;

const deleteButton = css`
  float: right;
  width: 200px;
  height: 50px;
  padding: 15px 15px;
  text-align: center;
  background-color: rgba(201, 9, 9, 0.5);
  border: none;
  border-radius: 10px;
  color: #fff;
  font-size: 20px;
  margin-top: 20px;
  box-shadow: 0px 2px 2px gray;
  @media screen and (max-width: 900px) {
    width: 70%;
    margin-left: 70px;
    margin-right: 0;
  }
  :hover {
    background-color: red;
    color: #fff;
  }
  :active {
    transform: scale(0.98);
  }
`;

const editButton = css`
  float: right;
  width: 200px;
  height: 50px;
  padding: 15px 15px;
  text-align: center;
  background-color: #0bc6d2;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-size: 20px;
  box-shadow: 0px 2px 2px gray;
  @media screen and (max-width: 900px) {
    width: 70%;
    margin-left: 70px;
    margin-right: 0;
    //margin-top: 50px;
  }
  :hover {
    background-color: #fed648;
    color: #583dfd;
  }
  :active {
    transform: scale(0.98);
  }
`;

export default function UserDataSection(props) {
  const router = useRouter();

  const [showEdit, setShowEdit] = useState(true);
  const [firstName, setFirstName] = useState(props.user.firstName);
  const [lastName, setLastName] = useState(props.user.lastName);
  const [email, setEmail] = useState(props.user.email);

  const handleFirstNameChange = (event) =>
    setFirstName(event.currentTarget.value);
  const handleLastNameChange = (event) =>
    setLastName(event.currentTarget.value);
  const handleEmailChange = (event) => setEmail(event.currentTarget.value);

  return (
    <div css={userSectionGrid}>
      {props.dataSection}
      <div css={userDetailsStyles}>
        <form>
          <div css={detailsTableStyles}>
            <h2>Personal Details</h2>
            <div>
              First Name:
              <span>
                <input
                  data-cy="user-edit-first-name"
                  onChange={handleFirstNameChange}
                  value={firstName}
                  disabled={showEdit ? 'disabled' : ''}
                />
              </span>
            </div>
            <div>
              Last Name:
              <span>
                <input
                  onChange={handleLastNameChange}
                  value={lastName}
                  disabled={showEdit ? 'disabled' : ''}
                />
              </span>
            </div>
            <div>
              E-mail:
              <span>
                <input
                  onChange={handleEmailChange}
                  value={email}
                  disabled={showEdit ? 'disabled' : ''}
                />
              </span>
            </div>
            <div>
              Username:
              <span css={usernameStyles}>{props.user.username}</span>
            </div>
          </div>
        </form>
      </div>
      <div css={buttonSection}>
        <button
          data-cy="user-edit-details-button"
          css={editButton}
          onClick={async () => {
            if (showEdit) {
              // This is to allow changes

              setShowEdit(false);
            } else {
              // This is to disable input and save changes
              setShowEdit(true);

              const response = await fetch(`/api/users/${props.user.id}`, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  firstName: firstName,
                  lastName: lastName,
                  email: email,
                  csrfToken: props.csrfToken,
                }),
              });
              await response.json();
            }
          }}
        >
          {showEdit ? 'Edit Details' : 'Save Changes'}
        </button>
        <button
          data-cy="delete-user-account"
          css={deleteButton}
          onClick={async () => {
            if (
              !window.confirm(
                `Really delete user ${props.user.firstName} ${props.user.lastName}?`,
              )
            ) {
              return;
            }

            const response = await fetch(`/api/users/${props.user.id}`, {
              method: 'DELETE',
            });
            const { user: deletedUser } = await response.json();
            alert(
              `Deleted user ${deletedUser.firstName} ${deletedUser.lastName}`,
            );
            router.push('/');
          }}
        >
          Delete Account
        </button>
      </div>
    </div>
  );
}
