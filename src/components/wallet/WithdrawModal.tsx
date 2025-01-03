import React, { useEffect, useState } from 'react';
import Modal from '../common/Modal/Modal';
import WithdrawForm from './WithdrawForm';
import ForgetPINModal from '../common/ForgetPINModal/ForgetPINModal';

const WithdrawModal = () => {
    const [isWithdrawModalOpen, setWithdrawModalOpen] = useState(false);
    const [isForgetPINModalOpen, setForgetPINModalOpen] = useState(false);
    const [walletInfo, setWalletInfo] = useState({});

    const handleWithdraw = () => {
        setWithdrawModalOpen(true);
        // setForgetPINModalOpen(false);
    };

    const handleForgetPIN = (walletInfo : any) => {
        setWalletInfo(walletInfo);
        setForgetPINModalOpen(true);
        setWithdrawModalOpen(false);
    };

    const handleCloseModal = () => {
        setWithdrawModalOpen(false);
        setForgetPINModalOpen(false);
    };


    return (
        <div className='w-full'>
            <div className='transition-all duration-500'>
                {/* withdraw modal */}
                <Modal
                    isOpen={isWithdrawModalOpen}
                    onClose={handleCloseModal}
                    title="Withdraw Money"
                >
                    <WithdrawForm
                        handleForgetPIN={handleForgetPIN}
                        setWithdrawModalOpen={setWithdrawModalOpen}
                    />

                </Modal>
                <button
                    onClick={() => handleWithdraw()}
                    className="text-xs bg-[#ea5455] text-white w-full p-1.5 rounded">Withdraw
                </button>
            </div>

            {/* forget pin modal */}
            <ForgetPINModal
                setForgetPINModalOpen={setForgetPINModalOpen}
                isForgetPINModalOpen={isForgetPINModalOpen}
                mainWallet={walletInfo}
            />

        </div>
    );
};

export default WithdrawModal;