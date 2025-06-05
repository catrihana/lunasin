import { data, valRecap } from 'Constants/summary-transaction';
import OverdueDashboard from './OverdueDashboard';
import PerformaDashboard from './PerformaDashboard';
import RecapDashboard from './RecapDashboard';

const SummaryTransaction = () => {
  return (
    <div className="w-full space-y-4">
      <div className="flex flex-col xl:flex-row w-full xl:space-x-4 space-y-4 xl:space-y-0">
        <PerformaDashboard data={data} />
        <RecapDashboard valRecap={valRecap} />
      </div>
      <OverdueDashboard data={data} />
    </div>
  );
};
export default SummaryTransaction;
