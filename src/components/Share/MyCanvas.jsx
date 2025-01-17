import React from 'react';
import StreamCanvas from './StreamCanvas';

export default function MyCanvas({ streamManager }) {
  const getNicknameTag = () => {
    return JSON.parse(streamManager.stream.connection.data).clientData;
  };

  return (
    <div className="flex-1 bg-white rounded-lg shadow-lg p-2">
      <div className="h-full w-full border border-gray-300 rounded-lg flex items-center justify-center">
        <span className="text-gray-500">
          내 화면
          {streamManager ? (
            <div className="">
              <StreamCanvas streamManager={streamManager} />
              <div>
                <p className="">{getNicknameTag()}</p>
              </div>
            </div>
          ) : null}
        </span>
      </div>
    </div>
  );
}
