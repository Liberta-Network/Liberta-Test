import { Address, MapStorage, SmartContract, constant, Blockchain } from "@neo-one/smart-contract";

type ProfileReport = {
  id: number;
  reporter: Address;
  reported: Address;
  reason: string;
  date: number;
};

export class ProfileReports extends SmartContract {
  private profileReportCount = 0;
  private readonly profileReportStorage = MapStorage.for<number, ProfileReport>();
  private readonly allowedDateDiff = 5184000;



  @constant
  public getReportById(id: number): ProfileReport {
    const report = this.profileReportStorage.get(id);

    if (report == null) throw ("Error: Report is null.")

    return report;
  }

  @constant
  public getAllReportsFromUser(reportedAddress: Address): ProfileReport[] {
    let reports: ProfileReport[] = [];

    this.profileReportStorage.forEach(report => {
      if (report.reported == reportedAddress) reports.push(report);
    })

    return reports;
  }

  @constant
  public getHowManyReportedPerUser(reported: Address, reporter: Address): number {
    let reportedCount = 0;

    this.profileReportStorage.forEach(report => {
      if (report.reported == reported && report.reporter == reporter) reportedCount++;
    })

    return reportedCount;
  }

  @constant
  public getPreviousReportsDateDiff(reported: Address, reporter: Address): number {
    let prevReportId = -1;
    let reportId = -1;

    this.profileReportStorage.forEach(report => {
      prevReportId = reportId;
      reportId = report.id;
    });

    if (prevReportId == -1 || reportId == -1) return -1;

    const prevReport = this.getReportById(prevReportId);
    const report = this.getReportById(reportId);

    const dateDiff = report.date - prevReport.date;
    return dateDiff;
  }

  public reportProfile(owner: Address, reported: Address, reason: string) {
    if (!Address.isCaller(owner)) throw ("Address is not caller.");

    const dateDiff = this.getPreviousReportsDateDiff(reported, owner);

    if (dateDiff != -1 && dateDiff < this.allowedDateDiff)
      throw ("Error: Reporter can not spam.");

    const newReport = {
      id: this.profileReportCount,
      reporter: owner,
      reported,
      reason,
      date: Blockchain.currentBlockTime
    } as ProfileReport;

    this.profileReportStorage.set(this.profileReportCount, newReport);
    this.profileReportCount++;
  }

}