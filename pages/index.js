
import Map from '../components/map';
import Wrapper from "../tsComponents/wrapper";
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
      <Wrapper>
          <Map />
          <ActionItems>
              <Header>
                  <Logo/>
                  <Profile>
                      <User user="harold"/>
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
                <ActionButton>
                    <ActionButtonImg pic="https://cdn-icons-png.flaticon.com/512/732/732944.png"/>
                    Wheels
                </ActionButton>
                <ActionButton>
                    <ActionButtonImg pic="https://cdn-icons-png.flaticon.com/512/747/747310.png"/>
                    Schedule
                </ActionButton>
              </ActionButtons>
          </ActionItems>
          <Input/>
      </Wrapper>
    )
  }

