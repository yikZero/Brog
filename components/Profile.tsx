import Title from "@/components/Title";
import BrogConfig from "@/brog.config";

export default function Profile() {
  return (
    <>
      <div className="flex flex-col gap-16">
        <div className="flex flex-col">
          <div className="text-gray-800 dark:text-gray-200 font-semibold text-xl">{BrogConfig.AUTHOR}</div>
          <div className="text-sm text-gray-700 dark:text-gray-400">{BrogConfig.OCCUPATION}</div>
        </div>
        <div>
          <Title title="关于" />
          <div className="text-sm leading-6 font-normal text-gray-600 dark:text-gray-400">{BrogConfig.BIO}</div>
        </div>
      </div>
    </>
  );
}
