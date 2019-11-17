import React, { Component } from 'react';
import { RefreshControl } from 'react-native';
import { WaveIndicator } from 'react-native-indicators';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Figure, Label, StyledLeaves, Wrapper } from './StyledComponents';
import { SpinnerWrapper } from '../../common/StyledComponents';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

class LeavesScreen extends Component {
    onRefresh = () => this.props.fetchEmployeeDetails(11);

    componentDidMount() {
        this.props.fetchEmployeeDetails(11);
        this.props.fetchActiveIntimations();
    }

    render() {
        let employeeDetails = this.props.employeeDetails;

        if (!employeeDetails.leaves)
            return (
                <SpinnerWrapper>
                    <WaveIndicator color='#000000' />
                </SpinnerWrapper>
            );

        let el = employeeDetails.leaves.earned;
        let sl = employeeDetails.leaves.sick;

        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#FCFCFC' }}>
                <ScrollView contentContainerStyle={{ flex: 1, justifyContent: "space-evenly", alignItems: 'center' }} refreshControl={
                    <RefreshControl progressViewOffset={30} refreshing={this.props.pullToRefresh} onRefresh={this.onRefresh} />
                }>
                    <StyledLeaves>
                        <Figure>{el}</Figure>
                        <Label>Earned Leaves</Label>
                    </StyledLeaves>
                    <StyledLeaves>
                        <Figure>{sl}</Figure>
                        <Label>Sick Leaves</Label>
                    </StyledLeaves>
                </ScrollView>
            </SafeAreaView>
        );
    }
};

LeavesScreen.navigationOptions = {
    title: 'Leaves',
    tabBarIcon: ({ focused }) => {
        let i = focused ? <FontAwesomeIcon icon='box' size={22} color={'#3780BE'} />
            : <FontAwesomeIcon icon='box' size={22} color={'#393939'} />
        return i;
    }
}

export default LeavesScreen;
