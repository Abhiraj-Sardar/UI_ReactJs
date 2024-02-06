import { useState, useEffect } from 'react';

import React from 'react'

const PtrEvent = (eventType, listener) => {
        useEffect(() => {
            window.addEventListener(eventType, listener);
            return () => {
                window.removeEventListener(eventType, listener);
            };
        }, [eventType, listener]);
}

export default PtrEvent;
