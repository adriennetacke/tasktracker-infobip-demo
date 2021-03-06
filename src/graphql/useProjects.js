import { useRealmApp } from "../RealmApp";

export default function useProjects() {
  const app = useRealmApp();
  
  if (!app.currentUser) {
    throw new Error("Cannot list projects if there is no logged in user.");
  }

  // Retrieve the current user's projects and assign it to `projects`.
  const projects = app.currentUser.customData.memberOf;

  return projects;
}
