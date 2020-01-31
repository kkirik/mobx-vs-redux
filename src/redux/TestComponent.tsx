import React, {FC} from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';

import {Store} from './store';
import {
  increaseAction,
  decreaseAction,
  resetAction,
  IIncAction,
  IDecAction,
  IResetAction,
  CalculationAction,
} from './counter/action';

interface ITestComponentsProps {
  propValue: string;
}

type Props = ITestComponentsProps & IMapDispatchToProps & IMapStateToProps;

const TestComponent: FC<Props> = ({propValue, counter}) => {
  return (
    <div>
      {propValue && <div>{propValue}</div>}
      <div className="value">{counter}</div>
      <button>-</button>
      <button>+</button>
    </div>
  );
};

interface IMapStateToProps {
  counter: number;
}

interface IMapDispatchToProps {
  increaseAction: () => IIncAction;
  decreaseAction: () => IDecAction;
  resetAction: () => IResetAction;
}

const mapStateToProps = (state: Store): IMapStateToProps => ({
  counter: state.counter,
});

const mapDispatchToProps = (dispatch: Dispatch<CalculationAction>): IMapDispatchToProps => ({
  increaseAction: () => dispatch(increaseAction()),
  decreaseAction: () => dispatch(decreaseAction()),
  resetAction: () => dispatch(resetAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TestComponent);
