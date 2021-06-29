import { useRouter } from 'next/router'
const Profile = () => {
    const router = useRouter()
  const { id } = router.query

  return <p>Profile for: {id}</p>
}
 
export default Profile;


