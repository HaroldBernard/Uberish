
import Map from '../components/map';
import MainScreenWrapper from "../tsComponents/mainScreenWrapper";
import ActionItems from "../tsComponents/actionItems";
import Logo from "../components/uberlog";
import Header from "../tsComponents/header";
import Profile from '../tsComponents/profile';
import User from '../components/user';
import UserImage from '../components/userImage';
import {ActionButton, ActionButtonImg } from '../components/actionButton';
import ActionButtons from '../tsComponents/actionButtons'
import Input from '../components/input';
import Link from 'next/link';

export default function Home() {
    return (
      <MainScreenWrapper>
          <Map />
          <ActionItems>
              <Header style={{justifyContent: "space-between"}}>
                  <Logo/>
                  <Profile>
                      <User user="Harold"/>
                      <UserImage src="https://cdn.pixabay.com/photo/2020/08/18/12/19/dog-5498086_1280.png"/>
                  </Profile>
              </Header>
              <ActionButtons>
                <Link href="/search">
                    <ActionButton>
                        <ActionButtonImg pic="https://i.ibb.co/cyvcpfF/uberx.png"/>
                        Ride
                    </ActionButton>
                </Link>
                <Link href="/search">
                    <ActionButton>
                        <ActionButtonImg pic="https://i.ibb.co/n776JLm/bike.png"/>
                        Wheels
                    </ActionButton>
                </Link>
                <ActionButton>
                    <ActionButtonImg pic="https://i.ibb.co/5RjchBg/uberschedule.png"/>
                    Schedule
                </ActionButton>
              </ActionButtons>
          </ActionItems>
          <Input placeholder="Where to?"/>
      </MainScreenWrapper>
    )
  }

