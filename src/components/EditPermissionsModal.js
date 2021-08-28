import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

import LGButton from "@leafygreen-ui/button";
import Modal from "@leafygreen-ui/modal";
import XIcon from "@leafygreen-ui/icon/dist/X";
import PlusIcon from "@leafygreen-ui/icon/dist/Plus";
import IconButton from "@leafygreen-ui/icon-button";
import TextInput from "@leafygreen-ui/text-input";
import { uiColors } from "@leafygreen-ui/palette";
import { useRealmApp } from "../RealmApp";


function useTeamMembers() {
  const [teamMembers, setTeamMembers] = React.useState(null);
  const [newUserEmailError, setNewUserEmailError] = React.useState(null);
  const app = useRealmApp();


  // Import the Realm functions: addTeamMember, removeTeamMember, and getMyTeamMembers
  const { addTeamMember, removeTeamMember, getMyTeamMembers } = app.currentUser.functions;

  // Implement the function updateTeamMembers so that it calls getMyTeamMembers and updates
  // the team variable with the current team members.
  const updateTeamMembers = () => {
    getMyTeamMembers().then(setTeamMembers);
  };

  // display team members on load
  React.useEffect(updateTeamMembers, []);

  return {
    teamMembers,
    errorMessage: newUserEmailError,
    // Call the addTeamMember() function and return updateTeamMembers if
    // addTeamMember() was successful.
    addTeamMember: async (email, isReadOnly) => {
      const { error } = await addTeamMember(email, isReadOnly);

      if (error) {
        setNewUserEmailError(error);
        return { error };
      } else {
        updateTeamMembers();
      }
    },
    // Call the removeTeamMember()
    removeTeamMember: async (email) => {
      await removeTeamMember(email);
      updateTeamMembers();
    },
  };
}

export default function EditPermissionsModal({
  isEditingPermissions,
  setIsEditingPermissions,
}) {
  const {
    teamMembers,
    errorMessage,
    addTeamMember,
    removeTeamMember,
  } = useTeamMembers();
  return (
    <Modal
      open={isEditingPermissions}
      setOpen={setIsEditingPermissions}
      size="small"
    >
      <ContentContainer>
        <ModalHeading>Team Members</ModalHeading>
        <ModalText>
          These users can add, read, and modify tasks in your project. Check the Read-Only Member option if you only want them to view your project and its tasks.
        </ModalText>
        <ModalText>Add a new user by email:</ModalText>
        <AddTeamMemberInput
          addTeamMember={addTeamMember}
          errorMessage={errorMessage}
        />
        <List>
          {teamMembers?.length ? (
            teamMembers.map((teamMember) => {
              return (
                <ListItem key={teamMember._id}>
                  <TeamMemberContainer>
                    <TeamMemberName>{teamMember.name}</TeamMemberName>
                    <IconButton
                      aria-label="remove-team-member-button"
                      className="remove-team-member-button"
                      onClick={async () => {
                        await removeTeamMember(teamMember.name);
                      }}
                    >
                      <XIcon />
                    </IconButton>
                  </TeamMemberContainer>
                </ListItem>
              );
            })
          ) : (
            <ModalText>No team members</ModalText>
          )}
        </List>
      </ContentContainer>
    </Modal>
  );
}

function AddTeamMemberInput({ addTeamMember, errorMessage }) {
  const [inputValue, setInputValue] = React.useState("");
  const [checked, setChecked] = React.useState(false);

  const handleCheck = () => {
    setChecked(!checked);
  };

  return (
    <>
      <Row>
        <InputContainer>
          <TextInput
            type="email"
            aria-labelledby="team member email address"
            placeholder="some.email@example.com"
            state={errorMessage ? "error" : "none"}
            errorMessage={errorMessage ?? "Foo"}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            value={inputValue}
          />
        </InputContainer>
      </Row>
      <Row>
        <InputContainer>
          <Checkbox
            label="Read-Only Member (Can View tasks but not Add tasks)"
            value={checked}
            onChange={handleCheck}
          />
        </InputContainer>
      </Row>
      <Row>
        <Button
          disabled={!inputValue}
          onClick={async () => {
            const result = await addTeamMember(inputValue, checked);
            if (!result?.error) {
              setInputValue("");
              setChecked(false);
            }
          }}
          styles={{ height: "36px" }}
        >
          <PlusIcon />
          Add User
        </Button>
      </Row>
    </>
  );
}

const Checkbox = ({ label, value, onChange }) => {
  return (
    <label>
      <input type="checkbox" checked={value} onChange={onChange} />
      {label}
    </label>
  );
};

const Button = styled(LGButton)`
  height: 36px;
  display: flex;
  justify-content: right;
`;

const Row = styled.div`
  display: flex;
  align-items: end;
`;
const InputContainer = styled.div`
  flex-grow: 1;
  margin-bottom: 15px;
`;
const ModalHeading = styled.h2`
  margin: 0;
  font-size: 24px;
`;
const ModalText = styled.p`
  margin: 8px 2px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const List = styled.ul`
  list-style: none;
  padding: 8px 0;
  margin: 0;
`;
const ListItem = styled.li(
  (props) => css`
    padding: 8px 12px;
    border-radius: 8px;
    :hover {
      background: ${uiColors.gray.light2};
    }
  `
);
const TeamMemberContainer = styled.div`
  display: flex;
  align-items: center;
`;
const TeamMemberName = styled.div`
  flex-grow: 1;
  padding: 8px 0;
`;
