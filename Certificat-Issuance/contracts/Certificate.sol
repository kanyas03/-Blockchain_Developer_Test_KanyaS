// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Certificate is Ownable {
    struct CertificateData {
        string name;
        string course;
        string grade;
        string issueDate;
    }

    mapping(uint256 => CertificateData) private certificates;

    event CertificateIssued(uint256 indexed certificateId, string name, string course);

    constructor() Ownable(msg.sender) {}

    function issueCertificate(
        uint256 certificateId,
        string memory name,
        string memory course,
        string memory grade,
        string memory issueDate
    ) external onlyOwner {
        certificates[certificateId] = CertificateData(name, course, grade, issueDate);
        emit CertificateIssued(certificateId, name, course);
    }

    function verifyCertificate(uint256 certificateId)
        external
        view
        returns (string memory name, string memory course, string memory grade, string memory issueDate)
    {
        CertificateData memory cert = certificates[certificateId];
        require(bytes(cert.name).length > 0, "Certificate not found");
        return (cert.name, cert.course, cert.grade, cert.issueDate);
    }
}
