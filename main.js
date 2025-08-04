        moment.locale('ru');

        function updateTime() {
            const now = moment();
            document.getElementById('hour').textContent = now.format('HH');
            document.getElementById('minute').textContent = now.format('mm');
            document.getElementById('second').textContent = now.format('ss');
            document.getElementById('ampm').textContent = now.format('A');
        }

        updateTime();
        setInterval(updateTime, 1000);