import { useRealmApp } from "../RealmApp";

export default function useModifiableProjects() {
  const app = useRealmApp();
  
  if (!app.currentUser) {
    throw new Error("Cannot list projects if there is no logged in user.");
  }

  // Retrieve the current user's projects and assign it to `projects`.
  const modifiableProjects = app.currentUser.customData.canWritePartitions;

  return modifiableProjects;
}
