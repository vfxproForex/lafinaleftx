import Image from "next/image";
import salesImage from "../../public/trade9.jpg";
import portfolio from "../../public/trade11.jpg";
import monitoringImage from "../../public/trade.jpg";

export default function ServiceView() {
  return (
    <div className="mt-6 p-2">
      <div className="p-4 rounded-lg">
        <h1 className="text-3xl mb-7 font-bold">Services</h1>
        <div className="mb-8">
          <h3 className="mb-4 text-xl font-semibold">Financial Planning</h3>
          <p className="text-justify mb-4 text-sm">
            Investment firms often provide financial planning services to help
            clients set and achieve their financial goals. This may involve
            analyzing their current financial situation, identifying objectives,
            and creating a comprehensive plan to achieve those goals
          </p>
          <Image
            src={salesImage}
            alt=""
            objectFit="contain"
            style={{
              borderRadius: 10,
            }}
            placeholder="blur"
          />
        </div>

        <div className="mb-8">
          <h3 className="mb-4 text-xl font-semibold">Investment Management</h3>
          <p className="text-justify mb-4 text-sm">
            Investment firms manage investment portfolios on behalf of their
            clients. This includes selecting appropriate investment vehicles
            such as stocks, bonds, mutual funds, ETFs (Exchange-Traded Funds),
            and alternative investments based on the client&apos;s risk
            tolerance, time horizon, and investment objectives.
          </p>
          <Image
            src={portfolio}
            alt=""
            objectFit="contain"
            style={{
              borderRadius: 10,
            }}
            placeholder="blur"
          />
        </div>
        <div className="mb-8">
          <h3 className="mb-4 text-xl font-semibold">
            Portfolio Monitoring and Rebalancing
          </h3>
          <p className="text-justify mb-4 text-sm">
            Investment firms regularly monitor clients&apos; investment
            portfolios and rebalance them as needed to maintain the desired
            asset allocation and risk level.
          </p>
          <Image
            src={monitoringImage}
            alt=""
            objectFit="contain"
            style={{
              borderRadius: 10,
            }}
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
}
